
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokingPipe from "../../src/components/MdiSmokingPipe.vue";

test("MdiSmokingPipe snapshot", () => {
  const wrapper = mount(MdiSmokingPipe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
