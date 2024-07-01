
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKey from "../../src/components/MdiKey.vue";

test("MdiKey snapshot", () => {
  const wrapper = mount(MdiKey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
