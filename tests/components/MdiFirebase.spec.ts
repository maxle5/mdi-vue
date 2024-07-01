
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFirebase from "../../src/components/MdiFirebase.vue";

test("MdiFirebase snapshot", () => {
  const wrapper = mount(MdiFirebase, {});
  expect(wrapper.html()).toMatchSnapshot();
});
