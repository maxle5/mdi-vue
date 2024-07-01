
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExclamation from "../../src/components/MdiExclamation.vue";

test("MdiExclamation snapshot", () => {
  const wrapper = mount(MdiExclamation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
