
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoft from "../../src/components/MdiMicrosoft.vue";

test("MdiMicrosoft snapshot", () => {
  const wrapper = mount(MdiMicrosoft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
