
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarLightFog from "../../src/components/MdiCarLightFog.vue";

test("MdiCarLightFog snapshot", () => {
  const wrapper = mount(MdiCarLightFog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
