
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanScooter from "../../src/components/MdiHumanScooter.vue";

test("MdiHumanScooter snapshot", () => {
  const wrapper = mount(MdiHumanScooter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
