
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewGridCompact from "../../src/components/MdiViewGridCompact.vue";

test("MdiViewGridCompact snapshot", () => {
  const wrapper = mount(MdiViewGridCompact, {});
  expect(wrapper.html()).toMatchSnapshot();
});
