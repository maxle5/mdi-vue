
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiXamarin from "../../src/components/MdiXamarin.vue";

test("MdiXamarin snapshot", () => {
  const wrapper = mount(MdiXamarin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
