
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseLockOutline from "../../src/components/MdiDatabaseLockOutline.vue";

test("MdiDatabaseLockOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
