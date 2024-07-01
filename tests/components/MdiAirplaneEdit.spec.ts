
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneEdit from "../../src/components/MdiAirplaneEdit.vue";

test("MdiAirplaneEdit snapshot", () => {
  const wrapper = mount(MdiAirplaneEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
