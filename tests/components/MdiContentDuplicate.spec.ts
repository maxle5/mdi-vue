
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentDuplicate from "../../src/components/MdiContentDuplicate.vue";

test("MdiContentDuplicate snapshot", () => {
  const wrapper = mount(MdiContentDuplicate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
