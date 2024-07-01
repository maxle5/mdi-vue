
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseEye from "../../src/components/MdiDatabaseEye.vue";

test("MdiDatabaseEye snapshot", () => {
  const wrapper = mount(MdiDatabaseEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
