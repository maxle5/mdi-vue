
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountReactivate from "../../src/components/MdiAccountReactivate.vue";

test("MdiAccountReactivate snapshot", () => {
  const wrapper = mount(MdiAccountReactivate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
