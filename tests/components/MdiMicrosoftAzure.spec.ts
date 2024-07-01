
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftAzure from "../../src/components/MdiMicrosoftAzure.vue";

test("MdiMicrosoftAzure snapshot", () => {
  const wrapper = mount(MdiMicrosoftAzure, {});
  expect(wrapper.html()).toMatchSnapshot();
});
