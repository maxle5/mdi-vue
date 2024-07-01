
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRaw from "../../src/components/MdiRaw.vue";

test("MdiRaw snapshot", () => {
  const wrapper = mount(MdiRaw, {});
  expect(wrapper.html()).toMatchSnapshot();
});
