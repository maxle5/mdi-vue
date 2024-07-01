
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLampOutline from "../../src/components/MdiLampOutline.vue";

test("MdiLampOutline snapshot", () => {
  const wrapper = mount(MdiLampOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
