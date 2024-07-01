
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeEqual from "../../src/components/MdiCodeEqual.vue";

test("MdiCodeEqual snapshot", () => {
  const wrapper = mount(MdiCodeEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
