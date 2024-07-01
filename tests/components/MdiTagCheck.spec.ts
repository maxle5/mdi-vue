
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagCheck from "../../src/components/MdiTagCheck.vue";

test("MdiTagCheck snapshot", () => {
  const wrapper = mount(MdiTagCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
