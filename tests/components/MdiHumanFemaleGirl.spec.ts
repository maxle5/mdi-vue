
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanFemaleGirl from "../../src/components/MdiHumanFemaleGirl.vue";

test("MdiHumanFemaleGirl snapshot", () => {
  const wrapper = mount(MdiHumanFemaleGirl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
