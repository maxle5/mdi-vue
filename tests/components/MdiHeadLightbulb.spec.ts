
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadLightbulb from "../../src/components/MdiHeadLightbulb.vue";

test("MdiHeadLightbulb snapshot", () => {
  const wrapper = mount(MdiHeadLightbulb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
