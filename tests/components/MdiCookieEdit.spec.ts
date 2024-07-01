
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieEdit from "../../src/components/MdiCookieEdit.vue";

test("MdiCookieEdit snapshot", () => {
  const wrapper = mount(MdiCookieEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
