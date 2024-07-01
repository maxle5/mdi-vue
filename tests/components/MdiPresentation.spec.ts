
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPresentation from "../../src/components/MdiPresentation.vue";

test("MdiPresentation snapshot", () => {
  const wrapper = mount(MdiPresentation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
