
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCakeLayered from "../../src/components/MdiCakeLayered.vue";

test("MdiCakeLayered snapshot", () => {
  const wrapper = mount(MdiCakeLayered, {});
  expect(wrapper.html()).toMatchSnapshot();
});
