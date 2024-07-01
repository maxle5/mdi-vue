
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleGirl from "../../src/components/MdiHumanMaleGirl.vue";

test("MdiHumanMaleGirl snapshot", () => {
  const wrapper = mount(MdiHumanMaleGirl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
