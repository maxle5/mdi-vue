
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSafe from "../../src/components/MdiSafe.vue";

test("MdiSafe snapshot", () => {
  const wrapper = mount(MdiSafe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
