
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseClockOutline from "../../src/components/MdiDatabaseClockOutline.vue";

test("MdiDatabaseClockOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
