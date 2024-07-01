
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneCheck from "../../src/components/MdiAirplaneCheck.vue";

test("MdiAirplaneCheck snapshot", () => {
  const wrapper = mount(MdiAirplaneCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
