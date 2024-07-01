
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbSpotOff from "../../src/components/MdiLightbulbSpotOff.vue";

test("MdiLightbulbSpotOff snapshot", () => {
  const wrapper = mount(MdiLightbulbSpotOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
