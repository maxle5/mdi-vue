
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailNewsletter from "../../src/components/MdiEmailNewsletter.vue";

test("MdiEmailNewsletter snapshot", () => {
  const wrapper = mount(MdiEmailNewsletter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
