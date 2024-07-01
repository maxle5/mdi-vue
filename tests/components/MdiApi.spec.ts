
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApi from "../../src/components/MdiApi.vue";

test("MdiApi snapshot", () => {
  const wrapper = mount(MdiApi, {});
  expect(wrapper.html()).toMatchSnapshot();
});
