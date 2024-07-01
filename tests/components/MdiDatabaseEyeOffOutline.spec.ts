
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseEyeOffOutline from "../../src/components/MdiDatabaseEyeOffOutline.vue";

test("MdiDatabaseEyeOffOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseEyeOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
