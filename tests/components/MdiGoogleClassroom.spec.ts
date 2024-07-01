
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleClassroom from "../../src/components/MdiGoogleClassroom.vue";

test("MdiGoogleClassroom snapshot", () => {
  const wrapper = mount(MdiGoogleClassroom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
