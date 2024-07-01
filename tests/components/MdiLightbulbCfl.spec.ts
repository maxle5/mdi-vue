
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbCfl from "../../src/components/MdiLightbulbCfl.vue";

test("MdiLightbulbCfl snapshot", () => {
  const wrapper = mount(MdiLightbulbCfl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
