
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhone from "../../src/components/MdiPhone.vue";

test("MdiPhone snapshot", () => {
  const wrapper = mount(MdiPhone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
