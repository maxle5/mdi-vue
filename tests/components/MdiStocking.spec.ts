
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStocking from "../../src/components/MdiStocking.vue";

test("MdiStocking snapshot", () => {
  const wrapper = mount(MdiStocking, {});
  expect(wrapper.html()).toMatchSnapshot();
});
