
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmail from "../../src/components/MdiEmail.vue";

test("MdiEmail snapshot", () => {
  const wrapper = mount(MdiEmail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
