
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGmail from "../../src/components/MdiGmail.vue";

test("MdiGmail snapshot", () => {
  const wrapper = mount(MdiGmail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
