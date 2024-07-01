
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSoccerField from "../../src/components/MdiSoccerField.vue";

test("MdiSoccerField snapshot", () => {
  const wrapper = mount(MdiSoccerField, {});
  expect(wrapper.html()).toMatchSnapshot();
});
