
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbGroupOutline from "../../src/components/MdiLightbulbGroupOutline.vue";

test("MdiLightbulbGroupOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbGroupOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
