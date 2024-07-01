
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbOn40 from "../../src/components/MdiLightbulbOn40.vue";

test("MdiLightbulbOn40 snapshot", () => {
  const wrapper = mount(MdiLightbulbOn40, {});
  expect(wrapper.html()).toMatchSnapshot();
});
