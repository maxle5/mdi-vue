
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardAccountMail from "../../src/components/MdiCardAccountMail.vue";

test("MdiCardAccountMail snapshot", () => {
  const wrapper = mount(MdiCardAccountMail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
