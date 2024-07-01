
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCubeUnfolded from "../../src/components/MdiCubeUnfolded.vue";

test("MdiCubeUnfolded snapshot", () => {
  const wrapper = mount(MdiCubeUnfolded, {});
  expect(wrapper.html()).toMatchSnapshot();
});
