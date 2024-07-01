
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseEyeOutline from "../../src/components/MdiDatabaseEyeOutline.vue";

test("MdiDatabaseEyeOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseEyeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
