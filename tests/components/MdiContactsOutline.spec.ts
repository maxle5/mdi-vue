
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContactsOutline from "../../src/components/MdiContactsOutline.vue";

test("MdiContactsOutline snapshot", () => {
  const wrapper = mount(MdiContactsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
