
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleDrive from "../../src/components/MdiGoogleDrive.vue";

test("MdiGoogleDrive snapshot", () => {
  const wrapper = mount(MdiGoogleDrive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
