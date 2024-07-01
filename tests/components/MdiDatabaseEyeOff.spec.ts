
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseEyeOff from "../../src/components/MdiDatabaseEyeOff.vue";

test("MdiDatabaseEyeOff snapshot", () => {
  const wrapper = mount(MdiDatabaseEyeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
