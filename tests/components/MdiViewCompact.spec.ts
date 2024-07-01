
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewCompact from "../../src/components/MdiViewCompact.vue";

test("MdiViewCompact snapshot", () => {
  const wrapper = mount(MdiViewCompact, {});
  expect(wrapper.html()).toMatchSnapshot();
});
