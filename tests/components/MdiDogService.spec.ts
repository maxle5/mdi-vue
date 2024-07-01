
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDogService from "../../src/components/MdiDogService.vue";

test("MdiDogService snapshot", () => {
  const wrapper = mount(MdiDogService, {});
  expect(wrapper.html()).toMatchSnapshot();
});
