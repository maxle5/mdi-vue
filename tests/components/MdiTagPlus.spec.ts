
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagPlus from "../../src/components/MdiTagPlus.vue";

test("MdiTagPlus snapshot", () => {
  const wrapper = mount(MdiTagPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
