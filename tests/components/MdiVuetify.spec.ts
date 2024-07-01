
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVuetify from "../../src/components/MdiVuetify.vue";

test("MdiVuetify snapshot", () => {
  const wrapper = mount(MdiVuetify, {});
  expect(wrapper.html()).toMatchSnapshot();
});
