
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPopcorn from "../../src/components/MdiPopcorn.vue";

test("MdiPopcorn snapshot", () => {
  const wrapper = mount(MdiPopcorn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
