
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftAzureDevops from "../../src/components/MdiMicrosoftAzureDevops.vue";

test("MdiMicrosoftAzureDevops snapshot", () => {
  const wrapper = mount(MdiMicrosoftAzureDevops, {});
  expect(wrapper.html()).toMatchSnapshot();
});
