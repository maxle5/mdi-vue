
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadLightbulbOutline from "../../src/components/MdiHeadLightbulbOutline.vue";

test("MdiHeadLightbulbOutline snapshot", () => {
  const wrapper = mount(MdiHeadLightbulbOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
